This project is written in react.js and using @material-ui for UI facelift.  
Redux is used for this application state management.  So, actions and reducers are implemented.
Hooks is used so that state and other React features without writing in a class.
The responsive grid is used to support this application for different devices, eg.  mobile phone
The files/modules are structured clearly into different folders for scalable and extendable of the project

The layout is divided into two grid columns.  The left one containing results properties and the right one 
containing saved properties.

Each property data is displayed in a card

When hovering each card, It popup "Add property" or "Remove property" clickable popover, depending on list type

On click, it will call action creator and in turn calling reducer to change and return a new state of data. 
As a result, the UI is updated.

















