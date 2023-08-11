import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import React from "react";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

const Link = ({ active, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={active}
      style={{
        marginLeft: '4px',
      }}
    >
      {children}
    </button>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
