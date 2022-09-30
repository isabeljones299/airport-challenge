| Object | Properties | Messages | Context | Output |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| Plane | Name @string | Text |  more text |
| Paragraph | Text | more text | more text |


|Object|Properties|Messages|Context|Output|notes|
|:----|:----|:----|:----|:----|:----|
|Plane |Name @string|name()| |@string| |
| |Status @string|location()|Taken off landed|@string “plane is flying”|
|@string “plane is in airport”|Default status would be taken off?|
|Airport|planesInAirport @array[plane]|
| |Land(@plane)|
|takeOff(@plane)|Not full, plane not in airport|
|Plane in airport|
| |@array[plane], @string “plane landed in airport”|
|@array[plane], @string “plane taken off from airport”| |
| |Capacity @int|increaseCapacity(@int)|Is full|
| |@string “{$@int} more landing spaces in airport”|need to set default capacity using constructor|
| |Capacity @int| |Is full|@string “plane cannot land as this airport is full”| |

|Object|Properties|Messages|Context|Output|notes|
|:----|:----|:----|:----|:----|:----|
|Plane |Name @string|name()| |@string| |
| |Status @string|location()|Taken off|
| |@string “plane is flying”|
| |Default status would be taken off?|
| | | |landed|@string “plane is in airport”| |
|Airport|planesInAirport @array[plane]|Land(@plane)|
| |Not full, plane not in airport|
| |@array[plane], @string “plane landed in airport”| |
| | |takeOff(@plane)|Plane in airport|
| |@array[plane], @string “plane taken off from airport”| |
| |Capacity @int|increaseCapacity(@int)|Is full|
| |@string “{$@int} more landing spaces in airport”|need to set default capacity using constructor|
| |Capacity @int| |Is full|@string “plane cannot land as this airport is full”| |
