   const margin = { right: 20, top: 30, left: 70, bottom: 40 };
   const width = 1200 - margin.left - margin.right;
   const height = 600 - margin.top - margin.bottom;

   const x = d3.scaleTime()
       .range([0, width]);

   const y = d3.scaleLinear()
       .range([height, 0]);

   const svg = d3.select("#chart-container")
       .append("svg")
       .attr("width", width + margin.left + margin.right)
       .attr("height", height + margin.top + margin.bottom)
       .append("g")
       .attr("transform", `translate(${margin.left},${margin.top})`);

   const dataset = [
       { date: new Date("2024-01-01"), value: 200 },
       { date: new Date("2024-02-01"), value: 300 },
       { date: new Date("2024-03-01"), value: 500 },
       { date: new Date("2024-04-01"), value: 250 },
       { date: new Date("2024-05-01"), value: 100 },
       { date: new Date("2024-06-01"), value: 150 },
       { date: new Date("2024-07-01"), value: 600 },
       { date: new Date("2024-08-01"), value: 400 },
       { date: new Date("2024-09-01"), value: 350 },
       { date: new Date("2024-10-01"), value: 650 },
       { date: new Date("2024-11-01"), value: 240 },
       { date: new Date("2024-12-01"), value: 540 }
   ];

   x.domain(d3.extent(dataset, d => d.date));
   y.domain([0, d3.max(dataset, d => d.value)]);

   svg.append("g")
       .attr("transform", `translate(0,${height})`)
       .call(d3.axisBottom(x)
           .tickFormat(d3.timeFormat("%b %y")));

   svg.append("g")
       .call(d3.axisLeft(y));

   const line = d3.line()
       .x(d => x(d.date))
       .y(d => y(d.value));

   svg.append("path")
       .datum(dataset)
       .attr("fill", "none")
       .attr("stroke", "steelblue")
       .attr("stroke-width", 1)
       .attr("d", line);


