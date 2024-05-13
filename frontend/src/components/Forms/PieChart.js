import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';

const PieChart = () => {
    const [chartData, setChartData] = useState(null);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/Fund/getall');
                const funds = response.data;

                // Data processing logic
                const donationFund = funds.filter(fund => fund.fundSource === 'Donation').reduce((total, fund) => total + fund.amount, 0);
                const adoptionFund = funds.filter(fund => fund.fundSource === 'Adoption').reduce((total, fund) => total + fund.amount, 0);
                const total = donationFund + adoptionFund;

                setChartData({
                    labels: ['Donation Fund', 'Adoption Fund'],
                    datasets: [{
                        label: 'Funds Distribution',
                        data: [donationFund, adoptionFund],
                        backgroundColor: ['#36A2EB', '#FFCE56'],
                        hoverOffset: 4,
                    }]
                });

                setTotalAmount(total);

            } catch (error) {
                console.error('Error fetching funds:', error);
                setChartData(null); // Reset chartData to null in case of an error
                setTotalAmount(0);
            }
        };

    fetchData();
  }, []);

    return (
        <div style={{ width: '400px', height: '400px' }}>
            <h2>Funds Distribution</h2>
            {chartData && <Pie data={chartData} options={{ responsive: true }} />}
            <div className="text-center font-bold text-s">Total Fund Amount</div>
            <div className="text-center font-bold text-2xl">Rs.{totalAmount.toLocaleString()}.00</div>
        </div>
    );
};

export default PieChart;
