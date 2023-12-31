import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import {
  addElementThunk,
  deleteElementThunk,
} from 'store/element/elementThunks';
import { emptyElementTrash } from 'store/element/elementSlice';
import { useClusters, useElements } from 'utils/hooks';
import { readClipboard, writeClipboard } from 'utils/helpers';

import GridWrap from 'components/shared/GridWrap/GridWrap';
import Button from 'components/shared/Button/Button';

import { themes } from 'styles/themes';

const { button } = themes.shadows;

const ElementEditBar = () => {
  const dispatch = useDispatch();
  const { activeCluster } = useClusters();
  const { elementTrash } = useElements();
  const isTrashBtn = elementTrash.length > 0;

  const addElement = async e => {
    const text = window.getSelection().toString();
    text && (await writeClipboard(text));
    // document.execCommand('copy');
    const element = (await readClipboard()).trim();
    try {
      dispatch(addElementThunk({ element, cluster: activeCluster.title }));
      e.target.blur();
    } catch (err) {
      e.target.blur();
      toast.error(`Invalid element, ${err.message}`);
    }
  };

  const emptyTrash = async () => {
    if (!confirm('Are you sure you want to delete the selected Clusters?')) {
      return;
    }
    // delete trash elements
    await elementTrash.forEach(el => dispatch(deleteElementThunk(el._id)));
    dispatch(emptyElementTrash());
  };

  return (
    <GridWrap
      $m="15px 15px"
      $pos="absolute"
      $side="right"
      $high="bottom"
      $gtc="1fr 1fr"
    >
      {isTrashBtn ? (
        <Button onClick={emptyTrash} $s="m" $bs={button}>
          Delete
        </Button>
      ) : (
        <span></span>
      )}

      <Button onClick={addElement} $s="m" $bs={button}>
        Add
      </Button>
    </GridWrap>
  );
};

export default ElementEditBar;
