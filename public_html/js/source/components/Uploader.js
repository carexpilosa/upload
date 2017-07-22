'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Uploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liste: [],
      formData: null
    };
    //this.do = this.do.bind(this);
  }

  render() {
    return (
      <div>
        <form method="post" encType="multipart/form-data" action={this.props.action}
              id="myForm">
          FORM UPLOAD<br/>
          <input type="file" id="tmpfiles" name="tmpfiles"
            onChange={this.do.bind(this)} multiple />
          <ul>{
            this.state.liste.map(function (file, idx) {
              return <li key={idx}>{file.name}</li>;
            })
          }</ul>
          <input type="submit" />
        </form>
        <button onClick={this.sendReq.bind(this)}>send Ajax Request</button>
      </div>
    );
  }

  sendReq() {
    console.log('sendReq');
    var myRequest = new XMLHttpRequest();
    myRequest.open('POST', this.props.action, true);
    let that = this;
    myRequest.onload = function() {
      if (myRequest.status === 200) {
        alert(myRequest.responseText);
        that.setState({
          liste: [],
          formData: null
        });
        console.log(that.state);
      }
    };
    myRequest.onprogress = function(e) {
      console.log('-----------------------');
      console.log(e);
      console.log(e.loaded);
      console.log(e.total);
    };
    myRequest.send(this.state.formData);
  }

  do(event) {
    let files = document.getElementById('tmpfiles').files;
    let myForm = document.getElementById('myForm');
    let formData = this.state.formData || new FormData(myForm);
    let liste = this.state.liste;
    for (let i = 0; i < files.length; i++) {
      formData.append('filelist', files[i]);
      liste.push(files[i]);
    }
    this.setState({
      formData: formData,
      liste: liste
    });
  }
};

//Uploader.propTypes = {
//};

Uploader.defaultProps = {
  action: '/upload.pl'
};

export default Uploader;
