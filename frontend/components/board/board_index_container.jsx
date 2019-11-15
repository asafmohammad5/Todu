import { connect } from 'react-redux';
import {fetchBoards, createBoard} from '../../actions/board_actions'
import {openModal} from "../../actions/modal_actions"
import BoardIndex from './board_index'

const msp = state => ({
  boards: Object.values(state.entities.boards)
})

const mdp = dispatch => ({
  fetchBoards: () => dispatch(fetchBoards()),
  createBoard: (board) => dispatch(createBoard(board)),
  openModal: modal => dispatch(openModal(modal))
})

export default connect(msp, mdp)(BoardIndex)