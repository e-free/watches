import FormModule from "./FormModule";
import WatchList from "./WatchList";
import WatchConstructor from "./WatchConstructor";
import React, {Component} from "react"


class Watches extends Component {
  state = {
    town: "",
    timezone: "",
    time: new Date(),
    progress: [],
  }

  handleDelete = (id) => {
    let afterRemove = this.state.progress.filter(item => item.id !== id)
    this.setState(prev => ({...prev, progress: afterRemove }));
  }

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState(prevForm => ({...prevForm, [name]: value }));
  }

  onSubmit = (event) => {
    event.preventDefault();
    const newWatch = new WatchConstructor(this.state.town, this.state.timezone);
    this.setState(prev => ({...prev,progress: [...prev.progress, newWatch]}));
    this.setState({
      town: "",
      timezone: ""
    });
  }

  getRealTime = () => {
    setInterval(() => {
      let newTime = this.state.progress.map(item => {
        let tHour, tMin, tSec;
        item.time = new Date(+new Date() + item.timezone * 60 * 60 * 1000 + 1000);
        tHour = item.time.getUTCHours();
        tMin = item.time.getMinutes();
        tSec = item.time.getSeconds();
        item.digitHour = ("0" + tHour).slice(-2);
        item.digitMin = ("0" + tMin).slice(-2);
        item.digitSec = ("0" + tSec).slice(-2);
        item.hour = (tHour * 360 / 12) + (tMin / 2 ) - 90;
        item.min = tMin * 360 / 60 - 90;
        item.sec = tSec * 360 / 60 - 90;

        return item;
      })

      this.setState(prevProgress => ({
        ...prevProgress,
        progress: newTime
      }));
    }, 1000)
  }

  componentWillUnmount = () => {
    clearInterval(this.getRealTime);
  }

  componentDidMount = () => {
    this.getRealTime();
  }

  render() {
      const { town, timezone, progress} = this.state
      return ( <>
        <FormModule town = {town} timezone = {timezone} onSubmit = {this.onSubmit} onChange = {this.onChange } /> 
        <WatchList progress = {progress} handleDelete = {this.handleDelete}/> </>
        )
      }
      }
export default Watches;