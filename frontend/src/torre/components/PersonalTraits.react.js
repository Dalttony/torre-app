import React from 'react';
import Chart from 'chart.js/auto';

class PersonalTraitComponent extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        const { groups, analyses } = this.props.traits;
        const traitLabels = groups.map((group) => group.id);        
        const torreGeneralAnalysis = groups.map((trait) => trait.median);
        let personGeneralAnalysis = [];
        let i = 0;
        let seguirBuscando = true;
        while (seguirBuscando){
      
            analyses.forEach((group, index) => {
                if(traitLabels.indexOf(group.groupId) == i){
                    console.log (i, group.analysis);
                    personGeneralAnalysis.push(group.analysis);
                    i++;
                    if ( traitLabels.length == personGeneralAnalysis.length || i > 4){
                        seguirBuscando = false;
                    }
                }
            });
        }
      console.log(personGeneralAnalysis);
      console.log(torreGeneralAnalysis);
        var myChart = new Chart(document.getElementById("trait").getContext("2d"), {
            type: 'radar',
            data: {
                labels: traitLabels,
                datasets: [{
                    label: 'App general traits',
                    data: torreGeneralAnalysis,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'
                },{
                    label: 'Personal traits',
                    data: personGeneralAnalysis,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }]
            },
            options: {
                elements: {
                  line: {
                    borderWidth: 3
                  }
                }
              },
        });
    }
    render(){
            return (
                    <div><canvas id="trait" width="400" height="400"></canvas></div>
                );
    }
}   

export default PersonalTraitComponent;