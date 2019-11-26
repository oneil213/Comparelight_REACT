

import React from 'react';
import './Footer.css';






class Footer extends React.Component {
    
    render() {
        return (
            <section id="footer">
<div className="pages">
    <div className="page_name">
            <a href="https://com.com">About</a>
            <a href="https://com.com">Terms</a>
            <a href="https://com.com">Policy</a>
            <a href="https://com.com">Contact</a>
    </div>
    <div className="flag"><img src="https://res.cloudinary.com/dfszquucy/image/upload/v1572870060/Comparelight/App/nigeria_ixhbk0.png" alt="Nigerian flag"/></div>
    
</div>


<div><hr/></div>

<div className="information">
<div className="social">
    <img src="https://res.cloudinary.com/dfszquucy/image/upload/v1572870060/Comparelight/App/instagram_qjkhyz.png" alt="Comparelight Instagram profile" />
    <img src="https://res.cloudinary.com/dfszquucy/image/upload/v1572870060/Comparelight/App/twitter_tqxxx3.png" alt="Comparelight Twitter profile" />
    <img src="https://res.cloudinary.com/dfszquucy/image/upload/v1572870059/Comparelight/App/facebook_e0jtej.png"  alt="Comparelight Facebook profile"/>
</div>
<div className="address">
    <h4>13/15, Manchester Road, GRA, Zaria,<br/>Kaduna State.</h4>
</div>
</div>

<div className="copyright">
<p>©2019-2020 Comparelight. Content is available in Policy.</p>
</div>
</section>
        )
    }
}

export default Footer;