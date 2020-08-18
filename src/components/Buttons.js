import React from 'react';


function Buttons() {
    return (
      <div className="container"><hr />
<div class="row">
    <div class="col-md-3">
    <button type="button" class="btn btn-primary">Primary</button><br /><br />
    <button type="button" class="btn btn-outline-primary">Primary</button>
    </div>  

    

    <div class="col-md-3">
        <button type="button" class="btn btn-success">Success</button><br /><br />
        <button type="button" class="btn btn-outline-success">Success</button>
    </div>  

    <div class="col-md-3">
        <button type="button" class="btn btn-danger">Danger</button><br /><br />
        <button type="button" class="btn btn-outline-danger">Danger</button>
    </div>  

    <div class="col-md-3">
        <button type="button" class="btn btn-warning">Warning</button><br /><br />
        <button type="button" class="btn btn-outline-warning">Warning</button>
    </div>  
</div> 
<hr />

        

        
      </div>
    );
  }
  
  export default Buttons;