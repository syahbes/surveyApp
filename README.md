//todo
handle submit / onfinish
admin screen :

1. add / edit question
2. see stats (bar chart and pie)


https://gifted-charts.web.app/


מה היה לנו
כל מיני חבילות
רידוקס
נייטיב פייפר

כל משתמש יכול לכתוב ב DB
אבל רק אדמין יכול להוסיף שאלות
ולראות את התוצאות

דיזיין פטרנס - קונטיינר וזה

Sure, I can help you implement some React design patterns in your React Native Expo app. Here are some common React design patterns that you can use:
1.
Container/Presenter Pattern: This pattern separates the logic and presentation of a component into two separate components. The Container component handles the logic and data fetching, while the Presenter component handles the presentation of the data. This pattern helps to keep the components clean and easy to test.
2.
Higher Order Components (HOC): HOCs are functions that take a component and return a new component with additional functionality. HOCs are useful for adding common functionality such as authentication, data fetching, or styling to multiple components.
3.
Render Props: This pattern involves passing a function as a prop to a component, which then uses that function to render its contents. This pattern is useful for sharing code between components and for creating reusable components.
4.
Context API: The Context API is a way to share data between components without passing props down through the component tree. This pattern is useful for sharing global data such as user settings or theme data.
5.
Redux: Redux is a state management library that provides a global store for your application state. It is useful for managing complex state and for sharing data between components.