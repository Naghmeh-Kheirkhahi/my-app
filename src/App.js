import logo from './logo.svg';
import './App.css';
import Button from './Button'
import List from './List';
import Table from './Table';
import Login from './Login';
import Register from './Register';
import Parent from './Parent';
import UserProfileParent from './User_Profile_Parent';



function App() {
  return (

    <div>
      {/* <div>
        <Parent/>
      </div>

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}

      <div >
        <UserProfileParent/>
      </div>
    </div>


    // <div>
    //   <Button className= "myBtn" 
    //   text='Click Here'/>

    //   <List className= "myList" 
    //   text1= 'HTML' text2= 'CSS' text3= 'JS' text4= 'REACT' text5= 'NodeJS'/>

    //   <Table className= "myTable"/>

    //   <br/> <hr/> <br/> <br/>

    //   <Login mainClass= "myForm" subClass= "formInfo"/>

    //   <Register mainClass= "mainClass" registerForm="registerForm" formTitle="formTitle"/>

    // </div>
  );
}

export default App;
