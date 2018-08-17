// import { connect } from 'dva';
// import { withRouter } from 'dva/router';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <p>父路由中的内容，每一个子路由中都显示本内容,最大的嵌套路由</p>
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
};

// export default withRouter (connect()(App));
export default App
