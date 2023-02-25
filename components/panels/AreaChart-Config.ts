export const data = {
  labels: ['0 months', '20 months', '40months', '60months'],
  datasets: [
    {
      label: 'Data 1',
      backgroundColor: '#2679f264',
      data: [0,230000000,270000000,270000000],
      fill: true // tried all possible values for this
    },
    {
      label: 'Data 2',
      backgroundColor: '#3d793f64',
      data: [0,230000000,300000000,600000000],
      fill: true // tried all possible values for this
    },
    {
      label: 'Data 3',
      backgroundColor: '#f8797964',
      data: [130000000,290000000,650000000,1000000000],
      fill: true // tried all possible values for this
    },
  ]
}

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins:{
    legend:{
      labels:{
        font:{
          size:18
        }
      }
    }
  }
}
