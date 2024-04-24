import Nav from "./root/nav";
import Features from './features';
import FullScreenEmojiComponent from './root/bg';
import Message from './message';
import FeatureHighlights from './highlights';
import Devs from './communitydev';
import Call2Action from './callactions';
import VedaCulture from './vedaculture';
import Footerr from './root/footer';
import FAQ from "./faq";
// import UpEvents from "./upcEvents";

function home (){
    return (
        <> 
       
        <Nav/>
        <div class='py-50'></div>
        <Message/>
        <FeatureHighlights/>
        <Devs/>
        <Call2Action/>
        <div class="p-20"></div>
        <VedaCulture/>
        <FAQ/>
        <Footerr/>
       <FullScreenEmojiComponent class='z-0 '> </FullScreenEmojiComponent>
        </>
    )
}
export default home;