import React, { Component } from 'react';

export default class LinkedInWidget extends Component {

  render() {

    return (
      <div>
      <script src="//platform.linkedin.com/in.js" type="text/javascript"></script>
      <script type="IN/MemberProfile" data-id="https://www.linkedin.com/in/raymond-sims-2a327491" data-format="inline" data-related="false"></script>
      </div>
    );
  }
}
