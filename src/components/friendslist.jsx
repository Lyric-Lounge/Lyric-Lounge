import { Box } from "@mui/material"
import VariantButtonGroup from "./VariantButton.jsx"


const Friendlist = () => {

  return (

    <section>
      <Box component="section" sx={{ p: 2, border: '1px solid #0094c6', width: 200 }}>
        <h1>Joey</h1>
        <ul class="mdc-list mdc-list--two-line">
          <li class="mdc-list-item" tabindex="0">
            <span class="mdc-list-item__ripple"></span>
            <span class="mdc-list-item__text">
              <span class="mdc-list-item__primary-text">Purple Rain</span>
              <span class="mdc-list-item__secondary-text">Prince</span>
            </span>
          </li>
          <li class="mdc-list-item">
            <span class="mdc-list-item__ripple"></span>
            <span class="mdc-list-item__text">
              <span class="mdc-list-item__primary-text">Let's Go Crazy</span>
              <span class="mdc-list-item__secondary-text">Prince</span>
            </span>
          </li>
          <li class="mdc-list-item">
            <span class="mdc-list-item__ripple"></span>
            <span class="mdc-list-item__text">
              <span class="mdc-list-item__primary-text">Another Brick in the Wall</span>
              <span class="mdc-list-item__secondary-text">Pink Floyd</span>
            </span>
          </li>
          <li class="mdc-list-item">
            <span class="mdc-list-item__ripple"></span>
            <span class="mdc-list-item__text">
              <span class="mdc-list-item__primary-text">Another One Bites the Dust</span>
              <span class="mdc-list-item__secondary-text">Queen</span>
            </span>
          </li>
          <li class="mdc-list-item">
            <span class="mdc-list-item__ripple"></span>
            <span class="mdc-list-item__text">
              <span class="mdc-list-item__primary-text">We Will Rock You</span>
              <span class="mdc-list-item__secondary-text">Queen</span>
            </span>
          </li>
        </ul>
        <VariantButtonGroup />
      </Box>

    </section>
  )
}

const Friendlist3 = () => {

  return (

    <section>
      <Box component="section" sx={{ p: 2, border: '1px solid #0094c6', width: 200 }}>
        <h1>Abby</h1>
        <ul class="mdc-list mdc-list--two-line">
          <li class="mdc-list-item" tabindex="0">
            <span class="mdc-list-item__ripple"></span>
            <span class="mdc-list-item__text">
              <span class="mdc-list-item__primary-text">What a Wonderful World (Single Version)</span>
              <span class="mdc-list-item__secondary-text">Louis Armstrong</span>
            </span>
          </li>
          <li class="mdc-list-item">
            <span class="mdc-list-item__ripple"></span>
            <span class="mdc-list-item__text">
              <span class="mdc-list-item__primary-text">My Way</span>
              <span class="mdc-list-item__secondary-text">Frank Sinatra</span>
            </span>
          </li>
          <li class="mdc-list-item">
            <span class="mdc-list-item__ripple"></span>
            <span class="mdc-list-item__text">
              <span class="mdc-list-item__primary-text">Don't Worry, Be Happy</span>
              <span class="mdc-list-item__secondary-text">Bobby McFerrin</span>
            </span>
          </li>
          <li class="mdc-list-item">
            <span class="mdc-list-item__ripple"></span>
            <span class="mdc-list-item__text">
              <span class="mdc-list-item__primary-text">Fly Me to the Moon (feat. Count Basie and His Orchestra)</span>
              <span class="mdc-list-item__secondary-text">Frank Sinatra</span>
            </span>
          </li>
          <li class="mdc-list-item">
            <span class="mdc-list-item__ripple"></span>
            <span class="mdc-list-item__text">
              <span class="mdc-list-item__primary-text">That's Life</span>
              <span class="mdc-list-item__secondary-text">Frank Sinatra

              </span>
            </span>
          </li>
        </ul>
        <VariantButtonGroup />
      </Box>

    </section>
  )
}
export default Friendlist;