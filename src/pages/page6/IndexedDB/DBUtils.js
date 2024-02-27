import Constant6 from "../Constant6";

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
      window['mozIndexedDB'] ||
      window['webkitIndexedDB'] ||
      window['msIndexedDB'];
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
      // 创建存储库
      const userStore = db.createObjectStore(Constant6.INDEXEDDB_TBL_NAME, {
        keyPath: 't_id',
        autoIncrement: true // 实现自增
      })
      // 创建索引，在后面查询数据的时候可以根据索引查
      userStore.createIndex("username", "username", { unique: false });
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
    const request = db
      .transaction([storeName], "readwrite") // 事务对象 指定表格名称和操作模式（"只读"或"读写"）
      .objectStore(storeName) // 仓库对象
      .add(data);

    request.onsuccess = function (event) {
      console.log("数据写入成功 event request", event, request);
      resolve(request?.result)
    };

    request.onerror = function (event) {
      console.log("数据写入失败 event request", event, request);
      reject()
    };
  })
}

/**
 * 更新数据
 * @param {object} db 数据库实例
 * @param {string} storeName 仓库名称
 * @param {object} data 数据
 */
export function updateDBData(db, storeName, data) {
  return new Promise((resolve, reject) => {
    const request = db
      .transaction([storeName], "readwrite") // 事务对象
      .objectStore(storeName) // 仓库对象
      .put(data);

    request.onsuccess = function () {
      console.log("数据更新成功");
      resolve(request?.result)
    };

    request.onerror = function () {
      console.log("数据更新失败");
      reject()
    };
  })
}

// 获取所有数据
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

/**
 * 通过索引和游标查询记录
 * @param {object} db 数据库实例
 * @param {string} storeName 仓库名称
 * @param {string} indexName 索引名称
 * @param {string} indexValue 索引值
 */
export function cursorGetDataByIndex(db, storeName, indexName, indexValue) {
  return new Promise((resolve, reject) => {
    let list = [];
    const store = db.transaction([storeName], "readwrite")
      .objectStore(storeName); // 仓库对象
    const request = store
      .index(indexName) // 索引对象
      .openCursor(IDBKeyRange.only(indexValue)); // 指针对象
    request.onsuccess = function (e) {
      const cursor = e.target.result;
      if (cursor) {
        // 必须要检查
        list.push(cursor.value);
        cursor.continue(); // 遍历了存储对象中的所有内容
      } else {
        resolve(list)
        console.log("游标索引查询结果：", list);
      }
    };
    request.onerror = function (e) {
      reject()
    };
  })
}

/**
 * 通过索引和游标分页查询记录
 * @param {object} db 数据库实例
 * @param {string} storeName 仓库名称
 * @param {string} indexName 索引名称
 * @param {string} indexValue 索引值
 * @param {number} page 页码
 * @param {number} pageSize 查询条数
 */
export function pageQuery({
  db,
  storeName,
  indexName,
  indexValue,
  page,
  pageSize
}) {
  return new Promise((resolve, reject) => {
    let list = [];
    let counter = 0; // 计数器
    let advanced = true; // 是否跳过多少条查询
    const store = db.transaction(storeName, "readwrite").objectStore(storeName); // 仓库对象
    let request
    if(indexName) {
      request = store
        .index(indexName) // 索引对象
        .openCursor(IDBKeyRange.only(indexValue)); // 指针对象
    }else {
      request = store.openCursor()
    }
    request.onsuccess = function (e) {
      const cursor = e.target.result;
      if (page > 1 && advanced) {
        advanced = false;
        cursor.advance((page - 1) * pageSize); // 跳过多少条
        return;
      }
      if (cursor) {
        // 必须要检查
        list.push(cursor.value);
        counter++;
        if (counter < pageSize) {
          cursor.continue(); // 遍历了存储对象中的所有内容
        } else {
          resolve(list)
          console.log("分页查询结果", list);
        }
      } else {
        resolve(list)
        console.log("分页查询结果", list);
      }
    };
    request.onerror = function (e) {
      reject()
    };
  })
}

/**
 * 通过主键删除数据
 * @param {object} db 数据库实例
 * @param {string} storeName 仓库名称
 * @param {object} id 主键值
 */
export function deleteDBData(db, storeName, id) {
  return new Promise((resolve, reject)=> {
    const request = db
      .transaction([storeName], "readwrite")
      .objectStore(storeName)
      .delete(id);

    request.onsuccess = function () {
      console.log("数据删除成功");
      resolve()
    };

    request.onerror = function () {
      console.log("数据删除失败");
      reject()
    };
  })
}

// 删除某个表的全部数据
export function delAllDBData(db, storeName) {
  return new Promise((resolve, reject) => {
    const store = db.transaction(storeName, "readwrite").objectStore(storeName);
    const request = store.openCursor(); // 指针对象
    request.onsuccess = function (e) {
      const cursor = e.target.result;
      let deleteRequest;
      if (cursor) {
        deleteRequest = cursor.delete(); // 请求删除当前项
        deleteRequest.onerror = function () {
          console.log("游标删除该记录失败");
          reject()
        };
        deleteRequest.onsuccess = function () {
          console.log("游标删除该记录成功");
        };
        cursor.continue();
      }
      resolve()
    };
    request.onerror = function (e) {
      reject()
    };
  })
}

// 删库
export function destroyDB(db, dbName) {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.deleteDatabase(dbName)
    request.onerror = function (event) {
      console.log("删除失败");
      resolve()
    };
    request.onsuccess = function (event) {
      console.log("删除成功");
      reject()
    };
  })
}
