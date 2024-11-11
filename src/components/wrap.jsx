import Header from "../pages/header";
import Footer from "../pages/footer";

function Wrap(props){

    const {Component} = props;

    return <>
     <Header />
       <Component />
     <Footer />
     </>
} 

export default Wrap