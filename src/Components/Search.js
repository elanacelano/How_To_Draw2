import React from "react";    


export default class drawings extends React.Component {
  render() {
    return (


    <div class="container">
        <div className="row">
        <div className="jumbotron text-center">
            <form role="form" method="post">
                <div className="col-md-6 form-group">
                    <input type="search" size="100" id="mySearch" placeholder="Search for Summoner Name">
                    <button type="button" className="btn btn-primary">Search</button>
                </div>
                <div className="col-md-6 form-group">
                    <label> NA</label>
                    <input type="radio" name="region" id="NA" value="NA" />
                    <label>EUW</label>
                    <input type="radio" name="region" id="EUW" value="EUW">
                </div>
            </form>
        </div>

    </div>
</div>
)
}
}
