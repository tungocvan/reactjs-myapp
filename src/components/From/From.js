import classNames from 'classnames/bind';
import styles from './From.module.scss';

const cx = classNames.bind(styles);

function FromRegister() {    
    return (
        <form id={cx("msform")} action="#">
          <fieldset>
          <h2 className={cx("fs-title")}>Create your account</h2>
          <h3 className={cx("fs-subtitle")}>This is step 1</h3>
          <input type="text" name="email" placeholder="Email" />
          <input type="password" name="pass" placeholder="Password" />
          <input type="password" name="cpass" placeholder="Confirm Password" />
          <div className={cx("checkbox")}>
               <input type="checkbox" /><label>ReactJs</label>
          </div>
          <div className={cx("radio")}>
               <input type="radio" /><label>ReactJs</label>
          </div>
          <div className={cx("select")}>
          <label htmlFor="cars">Choose a car:</label>  
          <select name="cars" id="cars">            
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
           </select>
          </div>
          <input
            type="button"
            name="next"
            className={cx("next action-button")}            
            defaultValue="Next"
          />
        </fieldset>
        </form>       
    );
}



export default FromRegister;
