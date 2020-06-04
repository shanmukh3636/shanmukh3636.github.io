$(document).ready(function()
{
    var url="https://api.covid19india.org/data.json"

    $.getJSON(url,function(data){
      console.log(data)

      var ta,tr,td,tc
      
      var state=[]
      var confirmed=[]
      var recovered=[]
      var deaths=[]
      var active=[]

      $.each(data.statewise,function(id,obj){
          state.push(obj.state)
          confirmed.push(obj.confirmed)
          recovered.push(obj.recovered)
          deaths.push(obj.deaths)
          active.push(obj.active)
      })
      
      state.shift()
      confirmed.shift()
      recovered.shift()
      deaths.shift()
      active.shift()

      console.log(state)

      ta=data.statewise[0].active
      tr=data.statewise[0].recovered
      td=data.statewise[0].deaths
      tc=data.statewise[0].confirmed

      $("#active").append(ta)
      $("#recovered").append(tr)
      $("#deaths").append(td)
      $("#confirmed").append(tc)

      var mychart= document.getElementById("mychart").getContext('2d')
      var chart=new Chart(mychart,{
          type:'bar',
          data:{
                labels:state,
                datasets:[
                  { label:"Confirmed Cases" ,
                    data: confirmed,
                    backgroundColor:"#f1c40f",
                    minBarLength:100
                },

                { label:" Active cases" ,
                data: active,
                backgroundColor:"#5bc0de",
                minBarLength:100
                }
                ,
                { label:"Recovered Cases" ,
                data: recovered,
                backgroundColor:"#2ecc71",
                minBarLength:100
                },

                { label:" Deceased" ,
                data: deaths,
                backgroundColor:"#e74c3c",
                minBarLength:100
            },
          


                ]
          },
          options:{}
      })
    })
})