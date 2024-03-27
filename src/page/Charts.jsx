/* eslint-disable react/prop-types */
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { getStore } from '../components/store';


const Charts = () => {
    const ReadStored = getStore();
    // console.log(ReadStored);
    const dataMap = ReadStored.map(e => {
        // console.log(e);
        return {
            name: e.bookName,
            page: e.totalPages,
            pv: 2400,
            amt: 2400
        }
    })
    const data = [
        {
            name: 'Page A',
            page: 3000,
            pv: 2400,
            amt: 2400
        },
        {
            name: 'Page B',
            page: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            page: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            page: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            page: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            page: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            page: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    // console.log(dataMap);

    const colors = ['#FF7ED4', '#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#5755FE', '#FF71CD'];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div className='lg:w-[85%] mx-auto'>
            <div className='lg:hidden'>
                <BarChart
                    className="w-full mx-auto mt-10"
                    width={375}
                    height={400}
                    data={dataMap}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Legend />
                    <YAxis />
                    <Bar dataKey="page" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </div>
            <div className='hidden lg:block'>
                <BarChart
                    className="w-full lg:w-3/4 mx-auto mt-20"
                    width={700}
                    height={400}
                    data={dataMap}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Legend />
                    <YAxis />
                    <Bar dataKey="page" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </div>
        </div>
    );
};

export default Charts;




