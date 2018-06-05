import * as React from 'react';
import 'styles/globals';
import {
  Segment,
  Container,
  Header,
  Grid,
  Checkbox,
  Button,
  Icon,
  Image,
} from 'semantic-ui-react';

const data = require('captures.json');
const bucketUrl =
  'https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/';

interface IProps {}
interface IState {}
class Index extends React.Component<IProps, IState> {
  state = {
    viewBasicRaw: false,
    viewCustomizeStyleRaw: false,
  };

  render() {
    //console.log(data);

    return (
      <>
        <Container>
          {data.map((n: any, idx: number) => {
            //console.log(bucketUrl + n['folder'] + '/' + n['name-ko'] + '.png');
            return (
              <Segment key={idx}>
                <h4>{n['desc-ko']}</h4>
                <img
                  src={bucketUrl + n['folder'] + '/' + n['name-ko'] + '.png'}
                  style={{ maxWidth: '600px' }}
                />

                <div>
                  <input
                    type={'text'}
                    defaultValue={
                      '![' +
                      n['desc-ko'] +
                      '](' +
                      bucketUrl +
                      n['folder'] +
                      '/' +
                      n['name-ko'] +
                      '.png' +
                      ')'
                    }
                    style={{ width: '100%' }}
                    onFocus={e => e.target.select()}
                  />
                  <input
                    type={'text'}
                    defaultValue={
                      '![' +
                      n['desc-en'] +
                      '](' +
                      bucketUrl +
                      n['folder'] +
                      '/' +
                      n['name-en'] +
                      '.png' +
                      ')'
                    }
                    style={{ width: '100%' }}
                    onFocus={e => e.target.select()}
                  />
                </div>
              </Segment>
            );
          })}
        </Container>
      </>
    );
  }
}

export default Index;
