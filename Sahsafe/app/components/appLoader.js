import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import * as AppConstant from '@constants';

// import CustomModal from '@components/customModal';
import Loader from '@components/Loader';


export class AppLoader extends Component {
    render() {
        let isVisible = this.props.isLoading
        return (
            <View>
                {isVisible && <View style={styles.container} >
                    <Loader style={styles.loaderStyle} isAnimating={this.props.isLoading} />
                </View>}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
        width: '100%',
        height: '100%',
        backgroundColor: AppConstant.Colors.black,
        opacity: 0.5,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    loaderStyle: {
        zIndex: 1
    }
})

const mapStateToProps = (state) => ({
    isLoading: state.common.isLoading
});

export default connect(mapStateToProps, null)(AppLoader)