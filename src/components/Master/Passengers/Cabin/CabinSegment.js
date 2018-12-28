import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actsPaxes from '../../../../actions/master/actionsPassengers';


class CabinSegment extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ev) {
    this.props.changePaxCabinClassHandler(this.props.pax.id, ev.target.value, this.props.seg.id);
  }

  render() {
    const cabinListForSegment = this.props.seg.cabinList.filter(cb => cb.age == this.props.pax.type);
    return (


      <div key={this.props.seg.id} className="card cabinSegment">
        <div className="card-body">
          <div className="row">
            <div className="col-2">
              {this.props.seg.from}
            </div>

            <div className="col-2">
              {this.props.seg.to}
            </div>


            <div className="col-3">
              <select
                className="form-control"
                id="exampleFormControlSelect2"
                onChange={this.handleClick}
              >

                {cabinListForSegment.map(cb => (
                  <option value={cb.class}>
                    {cb.class}
                    {' '}
                    {cb.price}
                    {' '}
                    {this.props.currency.code}
                  </option>
                ))}

              </select>

            </div>

            {cabinListForSegment.length == 1
                        && (
                        <div className="col-4">

                            Only one cabin available for this segment
                        </div>
                        )
                        }

          </div>
        </div>
      </div>


    );
  }
}


function mapStateToProps(state) {
  return {
    currency: state.currentCurrencyReducer,

  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    changePaxCabinClassHandler: actsPaxes.changeAirCabinClassPassengerAction,
  }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(CabinSegment);
