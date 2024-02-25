import Constant6 from "../Constant6";
import {rejects} from "assert";

/**
 * 打开数据库
 * @param {object} dbName 数据库的名字
 * @param {string} storeName 仓库名称
 * @param {string} version 数据库的版本
 * @return {object} 该函数会返回一个数据库实例
 */
export function openDB(dbName, version = 1) {
  return new Promise((resolve, reject) => {
    //  兼容浏览器
    let indexedDB =
      window.indexedDB ||
      window.mozIndexedDB ||
      window.webkitIndexedDB ||
      window.msIndexedDB;
    let db;
    // 打开数据库，若没有则会创建
    const request = indexedDB.open(dbName, version);
    // 数据库打开成功回调
    request.onsuccess = function (event) {
      db = event.target.result; // 数据库对象
      console.log("数据库打开成功");
      resolve(db);
    };
    // 数据库打开失败的回调
    request.onerror = function (event) {
      console.log("数据库打开报错");
    };
    // 数据库有更新时候的回调
    request.onupgradeneeded = function (event) {
      // 数据库创建或升级的时候会触发
      console.log("onupgradeneeded");
      db = event.target.result; // 数据库对象
      let objectStore;
      // 创建存储库
      objectStore = db.createObjectStore("signalChat", {
        keyPath: "t_id", // 这是主键
        autoIncrement: true // 实现自增
      });
      // 创建索引，在后面查询数据的时候可以根据索引查
      objectStore.createIndex("link", "link", { unique: false });
      objectStore.createIndex("sequenceId", "sequenceId", { unique: false });
      objectStore.createIndex("messageType", "messageType", { unique: false });

      const userStore = db.createObjectStore(Constant6.INDEXEDDB_TBL_NAME, {
        keyPath: 't_id',
        autoIncrement: true // 实现自增
      })
      // 创建索引，在后面查询数据的时候可以根据索引查
      userStore.createIndex("name", "name", { unique: false });
      userStore.createIndex("age", "age", { unique: false });
    };
  });
}

/**
 * 新增数据
 * @param {object} db 数据库实例
 * @param {string} storeName 仓库名称
 * @param {string} data 数据
 */
export function addData(db, storeName, data) {
  return new Promise((resolve, reject)=>{
    let request = db
      .transaction([storeName], "readwrite") // 事务对象 指定表格名称和操作模式（"只读"或"读写"）
      .objectStore(storeName) // 仓库对象
      .add(data);

    request.onsuccess = function (event) {
      console.log("数据写入成功 event request", event, request);
      resolve()
    };

    request.onerror = function (event) {
      console.log("数据写入失败 event request", event, request);
      reject()
    };
  })
}

/**
 * 通过主键读取数据 || 查询所有数据
 * @param {object} db 数据库实例
 * @param {string} storeName 仓库名称
 * @param {string} key 主键值
 */
export function getDataByKey(db, storeName, key) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([storeName]); // 事务
    const objectStore = transaction.objectStore(storeName); // 仓库对象
    let request
    if(key) {
      request = objectStore.get(key); // 通过主键获取数据
    }else{
      request = objectStore.getAll() // 如果不传索引则查询全部
    }
    request.onerror = function (event) {
      console.log("事务失败");
      reject()
    };

    request.onsuccess = function (event) {
      console.log("主键查询结果: ", request.result);
      resolve(request.result);
    };
  });
}

/**
 * 通过游标读取数据
 * @param {object} db 数据库实例
 * @param {string} storeName 仓库名称
 */
export function cursorGetData(db, storeName) {
  return new Promise((resolve, reject) => {
    let list = [];
    const store = db
      .transaction(storeName, "readwrite") // 事务
      .objectStore(storeName); // 仓库对象
    const request = store.openCursor(); // 指针对象

    // 游标开启成功，逐行读数据
    request.onsuccess = function (e) {
      const cursor = e.target.result;
      if (cursor) {
        // 必须要检查
        list.push(cursor.value);
        cursor.continue(); // 遍历了存储对象中的所有内容
      } else {
        // console.log("游标读取的数据：", list);
        resolve(list)
      }
    };

    request.onerror = function (event) {
      console.log("事务失败 event request", event, request);
      reject()
    }
  })
}
