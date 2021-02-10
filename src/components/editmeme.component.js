import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class EditMeme extends Component {
  constructor(props) {
    super(props);
    
    this.onChangeCaption = this.onChangeCaption.bind(this);
    this.onChangeUrl = this.onChangeUrl.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      caption: '',
      url:''
    }
    
  }
  componentDidMount() {
    
    axios.get("https://x-meme-app.herokuapp.com/memes/"+this.props.match.params.id)
      .then(response => {
        this.setState({
          caption: response.data.caption,
          url: response.data.url,
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

  }
  onChangeCaption(e) {
    this.setState({
      caption: e.target.value
    });
  }
  onChangeUrl(e) {
    this.setState({
      url: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const meme = {
      caption: this.state.caption,
      url: this.state.url,
    };
    
    URL = document.URL.split("/");
    const uid=URL[URL.length-1]==""?URL[URL.length-2]:URL[URL.length-1]
    axios.patch("https://x-meme-app.herokuapp.com/memes/"+uid, meme)
      .then(res => {console.log(res.data)})
      .catch((error)=>{
        console.log(error);
      })
    //setTimeout(function(){alert("Updated successfully");}, 1000);
    alert("Updated successfully. Click on Meme List");
    //window.location = '/meme-list';   
    //window.location.reload();
  }
  render() {
    return (
      <div>
        <h3>Edit Meme</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Caption: </label>
            <input type="text"
                required
                className="form-control"
                value={this.state.caption}
                onChange={this.onChangeCaption}
                />
          </div>
          <div className="form-group"> 
            <label>Image Url: </label>
            <input type="text"
                required
                className="form-control"
                value={this.state.url}
                onChange={this.onChangeUrl}
                />
          </div>

          <div className="form-group">
            <input type="submit" value="Edit Meme" className="btn btn-primary" />&nbsp;
            <Link to="/meme-list" className="btn btn-primary">Meme List</Link>
          </div>
        </form>
      
      </div>
    )
  }
}