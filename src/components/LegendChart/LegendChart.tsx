import s from './legendChart.module.css';
import { Data } from '../UnionDonutChart/UnionDonutChart';

type LegendProps = {
    info: Data
}

const LegendChart: React.FC<LegendProps> = ({ info }) => {
    return (
        <>
            <div className={s.title}>{info.title}</div>
                <div className={s.valueContainer}>
                <span className={s.currentValue?.toLocaleString()}>{info.current?.toLocaleString()}</span>
                <span className={s.maxValue?.toLocaleString()}> / {info.max?.toLocaleString()}</span>
            </div>
        </>
    )
}

export default LegendChart