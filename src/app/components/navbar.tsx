import React, { useContext } from "react"
import { Web3Context } from "../../context/web3-provider"
import "../styles/navbar.css"

const Nav = () => {
  const web3 = useContext(Web3Context)

  console.log("render Nav compo")
  console.log("web3 :>> ", web3)

  function connectToNearWallet() {
    if (web3) {
      web3.wallet?.signIn()
    }
  }

  return (
    <div className="navbar">
      {web3.isSignedIn ? (
        <div>
          <h2>Account id: {web3?.wallet?.accountId}</h2>
          <button>Sign out</button>
        </div>
      ) : (
        <button onClick={connectToNearWallet}>Connect to wallet</button>
      )}
    </div>
  )
}

export default Nav
