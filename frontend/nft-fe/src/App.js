
import styled from "styled-components";

function App() {
  let nft = {
    name: "Mario",
    symbol: "SMWC",
    copies: 10,
    image: "https://xxx"
  };

  const NFTCard = (props) => {
    let nft = props.nft;

    return (
      <NftCard>

      </NftCard>
    );
  };

  const NftCard = styled.dev `
    width: 200px;
    height: 250px;
    margin: auto;
    border-radius: 10px;
    padding: 0px;
    cursor: pointer;
    box-shadow: 8px 8px 16px #d9d9d9,
          -8px -8px 16px #ffffff;
  `

  return (
    <div className="App">
       <NFTCard nft={nft} /> 
    </div>
  );
}

export default App;
