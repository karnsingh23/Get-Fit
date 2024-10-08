const CategoryChart = ({ data }) => {
    return (
      <Card>
        <Title>Weekly Calories Burned</Title>
        {data?.pieChartData && (
          <PieChart
            series={[
              {
                data: data?.pieChartData,
                innerRadius: 30,
                outerRadius: 120,
                paddingAngle: 5,
                cornerRadius: 5,
              },
            ]}
            height={300}
          />
        )}
      </Card>
    );
  };
  
  export default CategoryChart;
  