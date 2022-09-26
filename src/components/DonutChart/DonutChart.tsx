import { Chart, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

Chart.register(ArcElement);

type DonutProps = {
    value: number
    cutout: string
    radius: string
    color: string
    className?: string
    secondColor?: string
}

const DonutChart: React.FC<DonutProps> = ({ value, cutout, radius, color, className, secondColor = "#E8E8E8" }) => {
    const data = {
        labels: [],
        datasets: [
            {
                data: [value, 100 - value],
                backgroundColor: [color, secondColor],
                borderWidth: 0
            }
        ],
        legend: false,
    }

    const options = {
        responsive: false,
        cutout: cutout,
        radius: radius,
        rotation: 180,
        circumference: 270,
    }

    return (
        <Doughnut
            className={className}
            data={data}
            width={150}
            height={150}
            options={options}
        />
    )
}

export default DonutChart