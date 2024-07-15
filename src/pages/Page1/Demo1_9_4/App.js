//App.js
import React from 'react';
import moment from "moment";
import Clock from './Clock';
import PrimeCalculator from './PrimeCalculator';
import UnitContent from "../../components/UnitContent";

// 将 PrimeCalculator 转换为纯组件
const PurePrimeCalculator = React.memo(PrimeCalculator);

function App() {
  const time = useTime();

  // 基于当前时间动态计算一个背景颜色
  const backgroundColor = getBackgroundColorFromTime(time);

  return (
    <UnitContent title={'Demo1_9_4'} label={'将目标组件用memo包起来, 这样就不会被需要不停刷新的组件影响'} disBtn={true}>
      <div style={{ backgroundColor }}>
        <Clock time={time} />
        <PurePrimeCalculator />
      </div>
    </UnitContent>
  );
}

const getBackgroundColorFromTime = (time) => {
  const ss = +moment(time).format('ss');
  if (ss < 12) {
    // A light yellow for mornings
    return 'hsl(50deg 100% 90%)';
  } else if (ss < 18) {
    // Dull blue in the afternoon
    return 'hsl(220deg 60% 92%)'
  } else {
    // Deeper blue at night
    return 'hsl(220deg 100% 80%)';
  }
}

function useTime() {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    }
  }, []);

  return time;
}

export default App;
