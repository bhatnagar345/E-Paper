import { useState } from 'react';
import './CSS/index.css';
import NewsAPI2 from './NewsPages/NewsApi2';
import NewsAPI from './NewsPages/NewsAPI';
import { Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import NewsApi3 from './NewsPages/NewsApi3';
import LeftMenu from './LeftMenu';
import './CSS/Card.css';
import FeedBack from './Feedback';

const App = () => {
  const [id, setid] = useState(false)

  const chnging = () => {
    if (id) {
      setid(!id);
      document.getElementById('clic1').style.background = "#8abe39";
      document.getElementById('clic2').style.background = "rgba(239,239,239,1)";
    }
    else {
      setid(!id);
      document.getElementById('clic2').style.background = "#8abe39";
      document.getElementById('clic1').style.background = "rgba(239,239,239,1)";
    }


  }

  return (

    <div>
      <div className="row">
        <div className="col-sm-3" >
          <LeftMenu />
          <div className="toggle">
            <h5> View Toggle</h5>
            <div className="buttons" >
              <button onClick={chnging} id="clic1" style={{ background: "#8abe39" }}><i class="far fa-address-card fa-2x"></i></button>
              <button onClick={chnging} id="clic2"><i class="fas fa-list-ul fa-2x"></i></button>
            </div>
          </div>
          
            <FeedBack/>
        </div>
        <div className="col-sm-9" >
          <div className="card_cont" >
            {/* <LinearCard/> */}
            <Switch>
              <Route exact path="/">
                <NewsAPI id={id} />
              </Route>
              <Route exact path="/2">
                <NewsAPI2 id={id} />
              </Route>
              <Route exact path="/3">
                <NewsApi3 id={id} />
              </Route>

            </Switch>
          </div>
          <div class="center">

            <div class="pagination">

              <NavLink exact to="/" >1</NavLink>
              <NavLink exact to="/2"  >2</NavLink>
              <NavLink exact to="/3" >3</NavLink>

              {/* <NavLink onClick={() => { setcount((count) % 3 + 1) }}>&raquo;</NavLink> */}
            </div>
          </div>
        </div>

      </div>

    </div>

  );
}

export default App;
