import React from 'react'

export const Alert = (props) => {
                    return (
                                        props.Alert !== null && (
                                                            <div className="container my-2">
                                                                                <div className={`alert alert-${props.Alert.type} alert-dismissible fade show`}>{props.Alert.msg}
                                                                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                                                                <span aria-hidden="true">&times;</span>
                                                                                </button>
                                                                                </div>
                                                            </div>
                                        )
                    )
}
export default Alert;
