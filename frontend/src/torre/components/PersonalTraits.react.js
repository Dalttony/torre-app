import React from 'react';
import Chart from 'chart.js/auto';

class PersonalTraitComponent extends React.Component{
    constructor(props){
        super(props)
        this.myChart;
    }

    componentDidMount(){
        console.log("mounted");
        
    }
    componentDidUpdate(){
        if (this.myChart != null){
            this.myChart.destroy();
        }

        let traitLabels = ["emotional","extraversion","openess","conscientiousness","honesty","agreeableness"];
        let personGeneralAnalysis = [];
        let torreGeneralAnalysis = [];
        if(this.props.personalTrait != null){
            traitLabels = [];
            const { groups, analyses } = this.props.personalTrait;
            traitLabels = groups.map((group) => group.id);        
            torreGeneralAnalysis = groups.map((trait) => trait.median);
            let i = 0;
            let seguirBuscando = true;
            while (seguirBuscando){
          
                analyses.forEach((group, index) => {
                    if(traitLabels.indexOf(group.groupId) == i){
                        personGeneralAnalysis.push(group.analysis);
                        i++;
                        if ( traitLabels.length == personGeneralAnalysis.length || i > 4){
                            seguirBuscando = false;
                        }
                    }
                });
            }
        }{}        
        this.myChart = new Chart(document.getElementById("trait").getContext("2d"), {
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
                    <div id={this.props.userName}><canvas id="trait" width="400" height="400"></canvas></div>
                );
    }
}   

export default PersonalTraitComponent;