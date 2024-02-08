import { InformationCircleIcon } from '@heroicons/react/solid';

import {
  AreaChart,
  BadgeDelta,
  Card,
  Flex,
  Grid,
  Icon,
  Metric,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Text,
  Title,
} from '@tremor/react';

import { useEffect, useState } from 'react';

import axios from 'axios';

const usNumberformatter = (number, decimals = 0) =>
  Intl.NumberFormat('us', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
    .format(Number(number))
    .toString();

const formatters = {
  Sales: (number) => `Rs.${usNumberformatter(number)}`,
  Profit: (number) => `Rs. ${usNumberformatter(number)}`,
  Customers: (number) => `${usNumberformatter(number)}`,
  Delta: (number) => `${usNumberformatter(number, 2)}%`,
};

const Kpis = {
  Sales: 'Sales',
  Customers: 'Customers',
};

const kpiList = [Kpis.Sales, Kpis.Customers];

const kpiData = [
  {
    title: 'Sales',
    metric: '$ 12,699',
    progress: 15.9,
    target: '$ 80,000',
    delta: '13.2%',
    deltaType: 'moderateIncrease',
  },
  {
    title: 'Profit',
    metric: '$ 45,564',
    progress: 36.5,
    target: '$ 125,000',
    delta: '23.9%',
    deltaType: 'increase',
  },
  {
    title: 'Customers',
    metric: '1,072',
    progress: 53.6,
    target: '2,000',
    delta: '10.1%',
    deltaType: 'moderateDecrease',
  },
];

const Overview = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedKpi = kpiList[selectedIndex];
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.post('/api/reports');
      setData(res.data);
    };
    fetchData();
  }, []);

  const areaChartArgs = {
    className: 'mt-5 h-72',
    data: data,
    index: 'date',
    categories: [selectedKpi],
    colors: ['blue'],
    showLegend: false,
    valueFormatter: formatters[selectedKpi],
    yAxisWidth: 60,
  };

  return (
    <>
      <main className="p-5">
        <Title>Dashboard</Title>
        <Text>Welcome to your Dashboard Overview</Text>
        <TabGroup className="mt-6">
          <TabList>
            <Tab>Overview</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Grid numItemsMd={2} numItemsLg={3} className="mt-6 gap-6">
                {kpiData.map((item) => (
                  <Card key={item.title}>
                    <Flex alignItems="start">
                      <div className="truncate">
                        <Text>{item.title}</Text>
                        <Metric className="truncate">{item.metric}</Metric>
                      </div>
                      <BadgeDelta deltaType={item.deltaType}>
                        {item.delta}
                      </BadgeDelta>
                    </Flex>
                  </Card>
                ))}
              </Grid>
              <div className="mt-6">
                <Card>
                  <>
                    <div className="md:flex justify-between">
                      <div>
                        <Flex
                          className="space-x-0.5"
                          justifyContent="start"
                          alignItems="center"
                        >
                          <Title> Performance History </Title>
                          <Icon
                            icon={InformationCircleIcon}
                            variant="simple"
                            tooltip="Shows daily increase or decrease of particular domain"
                          />
                        </Flex>
                        <Text> Daily change per domain </Text>
                      </div>
                      <div>
                        <TabGroup
                          index={selectedIndex}
                          onIndexChange={setSelectedIndex}
                        >
                          <TabList color="gray" variant="solid">
                            <Tab>Sales</Tab>
                            <Tab>Customers</Tab>
                          </TabList>
                        </TabGroup>
                      </div>
                    </div>
                    <div className="mt-8">
                      <AreaChart {...areaChartArgs} />
                    </div>
                  </>
                </Card>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </main>
    </>
  );
};

export default Overview;
