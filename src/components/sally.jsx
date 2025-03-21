import { Box } from "@mui/material"
import VariantButtonGroup from "./VariantButton.jsx"

const Friendlistsally = () => {

  return (

    <section>
      <Box component="section" sx={{ p: 2, border: '1px solid #0094c6', width: 200 }}>
        <h1>Sally</h1>
        <ul class="mdc-list mdc-list--two-line">
          <li class="mdc-list-item" tabindex="0">
            <span class="mdc-list-item__ripple"></span>
            <span class="mdc-list-item__text">
              <span class="mdc-list-item__primary-text">Would?</span>
              <span class="mdc-list-item__secondary-text">Alice In Chains</span>
            </span>
          </li>
          <li class="mdc-list-item">
            <span class="mdc-list-item__ripple"></span>
            <span class="mdc-list-item__text">
              <span class="mdc-list-item__primary-text"> Smells Like Teen Spirit</span>
              <span class="mdc-list-item__secondary-text">Nirvana</span>
            </span>
          </li>
          <li class="mdc-list-item">
            <span class="mdc-list-item__ripple"></span>
            <span class="mdc-list-item__text">
              <span class="mdc-list-item__primary-text">Alive</span>
              <span class="mdc-list-item__secondary-text">Pearl Jam</span>
            </span>
          </li>
          <li class="mdc-list-item">
            <span class="mdc-list-item__ripple"></span>
            <span class="mdc-list-item__text">
              <span class="mdc-list-item__primary-text"> Man In The Box</span>
              <span class="mdc-list-item__secondary-text">Alice in Chains</span>
            </span>
          </li>
          <li class="mdc-list-item">
            <span class="mdc-list-item__ripple"></span>
            <span class="mdc-list-item__text">
              <span class="mdc-list-item__primary-text">Outshined</span>
              <span class="mdc-list-item__secondary-text">Soundgarden</span>
            </span>
          </li>
        </ul>
        <VariantButtonGroup />
      </Box>

    </section>
  )
}
export default Friendlistsally;