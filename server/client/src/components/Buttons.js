import React from 'react';


function Buttons() {
    return (
      <div>
 
 <div class="container-fluid border ">
 <div class="p-3 mb-4 bg-light text-dark border border-dark m-4 ">
       <h2>
       Buttons
       </h2>
        </div>
<div class="row m-4">

    <div class="col-sm border border-dark border-right-0 "><br />
    <button type="button" class="btn btn-primary">Primary</button><br /><br />
    <button type="button" class="btn btn-outline-primary">Primary</button><br /><br />
    </div>  

    

    <div class="col-sm border border-dark border-right-0 "><br />
        <button type="button" class="btn btn-success">Success</button><br /><br />
        <button type="button" class="btn btn-outline-success">Success</button>
    </div>  

    <div class="col-sm border border-dark border-right-0 "><br />
        <button type="button" class="btn btn-danger">Danger</button><br /><br />
        <button type="button" class="btn btn-outline-danger">Danger</button>
    </div>  

    <div class="col-sm border border-dark "><br />
        <button type="button" class="btn btn-warning ">Warning</button><br /><br />
        <button type="button" class="btn btn-outline-warning">Warning</button>
    </div>  
</div> 
<br />

  </div>
      </div>
    );
  }
  
export default Buttons;