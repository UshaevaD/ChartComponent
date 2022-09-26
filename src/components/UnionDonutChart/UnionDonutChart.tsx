import s from './unionDonutChart.module.css';
import DonutChart from "../DonutChart/DonutChart";
import LegendChart from "../LegendChart/LegendChart";

export type Data = {
    title: string
    current: number
    max: number
}

type UnionDonutProps = {
    nit: Data
    prognosis: Data
}

const UnionDonutChart: React.FC<UnionDonutProps> = ({ nit, prognosis }) => {
    const nitValue = Math.round((nit.current * 100) / nit.max)
    const prognosisValue = Math.round((prognosis.current * 100) / prognosis.max)

    return (
        <div className={s.container}>
            <div className={s.unionDiagram}>
                <div className={s.diagramContainer}>
                    <DonutChart 
                        value={nitValue} 
                        cutout="95%"
                        radius="100%"
                        color="#C4C4C4"
                    />
                    <DonutChart 
                        className={s.diagramCenter}
                        value={prognosisValue} 
                        cutout="60%"
                        radius="80%"
                        color="#FF7F00"
                    />

                    <div className={s.labelCenter}>{nitValue}<small>%</small></div>
                    <div className={s.labelRight}>{prognosisValue}%</div>
                </div>
            </div>

            <div className={s.info}>
                <LegendChart info={nit} />
                <LegendChart info={prognosis} />
            </div>
        </div>
    )
}

export default UnionDonutChart