const {json} = d3

json("file:///D:/LUISOBANDO/D3/map/custom.geo.json").then(data => init(data))

const init = data => {
     console.log(data)
}