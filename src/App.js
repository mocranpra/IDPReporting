import './App.css';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';



function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <PowerBIEmbed
          embedConfig={{
            type: 'report',   // Supported types: report, dashboard, tile, visual and qna
            id: 'ccb84689-5bae-434f-8641-8be1ac7da586',
            embedUrl:"https://app.powerbi.com/reportEmbed?reportId=ccb84689-5bae-434f-8641-8be1ac7da586&groupId=1bde930d-2523-4e58-820e-2366252138bb&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVdFU1QtRVVST1BFLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWV9fQ%3d%3d",
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMWNlZjlhNTktNjJlYy00MThhLTk2NjYtMmIzYWZjMmQyY2IwLyIsImlhdCI6MTY2MDg0MjQwNCwibmJmIjoxNjYwODQyNDA0LCJleHAiOjE2NjA4NDczMTAsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84VEFBQUFseGptb3lrbi9pRHpzOEJTTUViMkFKTFBVUHl4SGd1UThwYkxXSk5mS1NiRHlnekFTME9QemtpQ0EybE8vekd0L1kzcUxvWnl1NGtjbmxqU21WM3lCZGVxc1R0K0ZIRnFLc2ZLVkR3cUtRaz0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIyIiwiZmFtaWx5X25hbWUiOiJPY3JhbiIsImdpdmVuX25hbWUiOiJNYXJpZSBMb3Vpc2UiLCJpcGFkZHIiOiIxOTkuOTYuMjU0LjI1MCIsIm5hbWUiOiJPY3JhbiwgTWFyaWUgTG91aXNlIiwib2lkIjoiN2U3MDFmNGItOTZjOS00YzRlLWFkMDctZTEyZDcxNzRmNWZkIiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTExNzYxMzU1NDAtMTY3NTgwOTEyLTUzODI3MjIxMy00NDUwNDYiLCJwdWlkIjoiMTAwMzIwMDE2RkE4RUUzMyIsInJoIjoiMC5BUTRBV1pydkhPeGlpa0dXWmlzNl9DMHNzQWtBQUFBQUFBQUF3QUFBQUFBQUFBQU9BUG8uIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiS2NqbGVpWDVjb29lc0F4cXNzRnBadVJ3UzBubHgxOU1MVFozOXllWDRkWSIsInRpZCI6IjFjZWY5YTU5LTYyZWMtNDE4YS05NjY2LTJiM2FmYzJkMmNiMCIsInVuaXF1ZV9uYW1lIjoiT2NyYW5NYXJpZUxvdWlzZUBwcmFpbnRsLmNvbSIsInVwbiI6Ik9jcmFuTWFyaWVMb3Vpc2VAcHJhaW50bC5jb20iLCJ1dGkiOiJPOWY3bHZDUEowTzJMNmdIM1YwR0FBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.CD456Mx8Hcxon_OJ6WiJLteUuvYFowmKNlT0F4nem6sotiiUqSjqgD9lRV9mOJUSG1dgAqQv2ltRXNmmmYrK-2ib4XMnXG6LY-HBZDNatOiGaPaucLPsaQZ6LzymwrG_XMyws4jJxj8Wzbf2KsL5EQ-1hNMBLovUHUN7ECZVRjbB-LYHwy0mMIW8e2P-fBRWm8OFy_qVDFoNqXD1P8CO5McUi1YqOvgHz_CJL-4YbIZiDiy-YdbeijTwdjgU5EY07WEiI3-q44Ale0FUCLhr1SP6NcM0i2ktzg7LtFGyouisy6HEnoGuRV45gbapfAN10wW8688P9BhZ6g9A5cYiAQ',
            tokenType: models.TokenType.Aad,
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: true
                }
              },
            }
          }}

          eventHandlers={
            new Map([
              ['loaded', function () { console.log('Report loaded'); }],
              ['rendered', function () { console.log('Report rendered'); }],
              ['error', function (event) { console.log(event.detail); }]
            ])
          }

          cssClassName={"Embed-container"}

          getEmbeddedComponent={(embeddedReport) => {
            window.report = embeddedReport;
          }}
        />
      </header>
    </div>
  );
}

export default App;
