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
            id: '1ccb84689-5bae-434f-8641-8be1ac7da586',
            embedUrl: "https://app.powerbi.com/reportEmbed?reportId=ccb84689-5bae-434f-8641-8be1ac7da586&groupId=1bde930d-2523-4e58-820e-2366252138bb&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXVzLWVhc3QtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9",
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMWNlZjlhNTktNjJlYy00MThhLTk2NjYtMmIzYWZjMmQyY2IwLyIsImlhdCI6MTY2MDE2NDY4NywibmJmIjoxNjYwMTY0Njg3LCJleHAiOjE2NjAxNjg2OTksImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84VEFBQUFiYnZjN3JvaU5GVTZ6VUtMMnVoQ2hGMHhocG5lZ0cybzc2Sy8vTGV6bGh2bEJJKzFxTnpTbDJMalIvaGlmMmlJM0UyOGVDSXNNcnBiR2U0Q0Q5VGpzekNieThpMDBRNFdWYm9Rd29MRy9vVT0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIyIiwiZmFtaWx5X25hbWUiOiJPY3JhbiIsImdpdmVuX25hbWUiOiJNYXJpZSBMb3Vpc2UiLCJpcGFkZHIiOiIxOTkuOTYuMjU0LjI1MCIsIm5hbWUiOiJPY3JhbiwgTWFyaWUgTG91aXNlIiwib2lkIjoiN2U3MDFmNGItOTZjOS00YzRlLWFkMDctZTEyZDcxNzRmNWZkIiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTExNzYxMzU1NDAtMTY3NTgwOTEyLTUzODI3MjIxMy00NDUwNDYiLCJwdWlkIjoiMTAwMzIwMDE2RkE4RUUzMyIsInJoIjoiMC5BUTRBV1pydkhPeGlpa0dXWmlzNl9DMHNzQWtBQUFBQUFBQUF3QUFBQUFBQUFBQU9BUG8uIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiS2NqbGVpWDVjb29lc0F4cXNzRnBadVJ3UzBubHgxOU1MVFozOXllWDRkWSIsInRpZCI6IjFjZWY5YTU5LTYyZWMtNDE4YS05NjY2LTJiM2FmYzJkMmNiMCIsInVuaXF1ZV9uYW1lIjoiT2NyYW5NYXJpZUxvdWlzZUBwcmFpbnRsLmNvbSIsInVwbiI6Ik9jcmFuTWFyaWVMb3Vpc2VAcHJhaW50bC5jb20iLCJ1dGkiOiJ0X2FxM0cwNHAwT1c0b0RVa0ZpMkFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.j7d62l-snt1-7S7Avu4ya_-ArTkgfvZtaCux2mY72TdnQFBLhCnlkOCUsGJg-qukvpYtRm_qhinYDfcMRgbvflJY8ipN_OCoGwQG7f3JSq8hHA9F81wBuiFmXcG9Uu1tYBZr_URxS2-NMmM2e2n-tPsqJjucUeZnZHbyEGM6pKKKJQeTuhbap9QkSu6pWRXO5lhJ0ITlvniBqYpL-J-n_GBFUdUK_4Fwuo9uDvj_bDPNSkXoDbnk1FL430B1cUWS1SorreGjPheyPL9o40pr-tCUJRhGCCBgY-oNSTyCyYSmOE7uLZYc5mQKuLD0jo2z9180rdvdp4NQ0xMWOYVbyQ',
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
