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
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMWNlZjlhNTktNjJlYy00MThhLTk2NjYtMmIzYWZjMmQyY2IwLyIsImlhdCI6MTY2MDg1ODg3NSwibmJmIjoxNjYwODU4ODc1LCJleHAiOjE2NjA4NjQxODAsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84VEFBQUFpZXN5aVc1S1BiZWQ2akRYOUpybCtUS0daOFhWRERjN0ZKRWVXZXpudzFzcXY1emwxOFF3SkF5bFJNTk1KbmZpZWdMR1dIR2htUkZpbmpqaUt6WnByUmViSEpuOFVwZ0ljbk5VcnBRdDVCOD0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIyIiwiZmFtaWx5X25hbWUiOiJPY3JhbiIsImdpdmVuX25hbWUiOiJNYXJpZSBMb3Vpc2UiLCJpcGFkZHIiOiIxOTkuOTYuMjU0LjI1MCIsIm5hbWUiOiJPY3JhbiwgTWFyaWUgTG91aXNlIiwib2lkIjoiN2U3MDFmNGItOTZjOS00YzRlLWFkMDctZTEyZDcxNzRmNWZkIiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTExNzYxMzU1NDAtMTY3NTgwOTEyLTUzODI3MjIxMy00NDUwNDYiLCJwdWlkIjoiMTAwMzIwMDE2RkE4RUUzMyIsInJoIjoiMC5BUTRBV1pydkhPeGlpa0dXWmlzNl9DMHNzQWtBQUFBQUFBQUF3QUFBQUFBQUFBQU9BUG8uIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiS2NqbGVpWDVjb29lc0F4cXNzRnBadVJ3UzBubHgxOU1MVFozOXllWDRkWSIsInRpZCI6IjFjZWY5YTU5LTYyZWMtNDE4YS05NjY2LTJiM2FmYzJkMmNiMCIsInVuaXF1ZV9uYW1lIjoiT2NyYW5NYXJpZUxvdWlzZUBwcmFpbnRsLmNvbSIsInVwbiI6Ik9jcmFuTWFyaWVMb3Vpc2VAcHJhaW50bC5jb20iLCJ1dGkiOiJVaWVwZFVSd3YwdW1obnhGeVRfekFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.MzkXLhrvOiM7i4P74ix4_bRKiZ3lFrmLTQAfWyuBRj7FFYRJPLjfG8tf8OByDvdePZHggoMR2JLK5rxHsovKNgZ9EGdebzy4DPyrF1X5jZteoLjvvHgsnom9x22jU8AZqHyhvEf_CACHRE3nNkcDfXGWrnjGiHIDQ8Wlbv4Kk2mbFuB92a5yOfnfDJgow98EJmUepX21Xd_rvJ1ruwJZuRO98XLPboNXVy_-zsDLEmHSgo9Ovvu_QJ1CNebTxCzYwQdq_H1ZjUwBxzPJwMhzay7CDllctczB0l_vmKUXaiyVsUy_UBEK4U4w1PNiR4cPpny-DMqIju5h2IUZDctlhQ',
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
