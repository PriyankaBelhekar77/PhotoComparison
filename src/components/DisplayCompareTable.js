import { Table } from 'semantic-ui-react';
const { Header, HeaderCell, Body, Row, Cell } = Table;

const DisplayCompareTable = ({ compareData }) => {
  return (
    <>
      <Table celled>
        <Header>
          <Row>
            <HeaderCell>Photo</HeaderCell>
            <HeaderCell>ID</HeaderCell>
            <HeaderCell>URL</HeaderCell>
            <HeaderCell>Title</HeaderCell>
          </Row>
        </Header>
        <Body>
          {compareData.map((photo) => (
            <Row key={photo.id * 10}>
              <Cell>
                <div className='table-image'>
                  <img src={photo.url} />
                </div>
              </Cell>
              <Cell>{photo.id}</Cell>
              <Cell>{photo.url}</Cell>
              <Cell>{photo.title}</Cell>
            </Row>
          ))}
        </Body>
      </Table>
    </>
  );
}

export default DisplayCompareTable;
