import React from "react";
import { Input, Checkbox, Button, message } from "antd";

export class PaymentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      confirm: false
    };
  }

  handleInput = e => {
    this.setState({ email: e.target.value });
  };

  handleCheckbox = e => {
    this.setState({ confirm: e.target.checked });
  };

  render() {
    const disabled =
      this.state.email !== "" &&
      this.state.confirm &&
      this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        ? false
        : true;

    return (
      <div style={{ padding: "15px" }}>
        <form
          method="POST"
          action="https://testnet.demo.btcpayserver.org/apps/37NLaNoSEjz6J39eHUKMdgKYz7gv/pos"
        >
          <Input
            placeholder="Please input your email"
            style={{ marginBottom: "10px" }}
            onChange={this.handleInput}
            onBlur={() =>
              !this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
                ? message.warning("Email is not valid")
                : null
            }
          />
          <Checkbox
            style={{ marginBottom: "10px" }}
            onChange={this.handleCheckbox}
          >
            I Accept the Terms and Conditions
          </Checkbox>
          <input type="hidden" name="email" value={this.state.email} />
          <input type="hidden" name="orderId" value="CustomSockShopId" />
          <input
            type="hidden"
            name="redirectUrl"
            value="https://sockshop.apotdevin.com/paid"
          />
          <Button
            disabled={disabled}
            style={{ width: "150px" }}
            value={this.props.coin}
            htmlType="submit"
            name="choiceKey"
          >
            {`To Payment ($${this.props.price})`}
          </Button>
        </form>
      </div>
    );
  }
}
