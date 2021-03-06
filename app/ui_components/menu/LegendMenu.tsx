import * as React from 'react';
import { AppState } from '../../stores/States';
import { Legend } from '../../stores/Legend';
import { observer } from 'mobx-react';
import { TextEditor } from '../misc/TextEditor';
@observer
export class LegendMenu extends React.Component<{
    state: AppState,
}, {}> {

    render() {
        let strings = this.props.state.strings;
        let legend = this.props.state.legend;

        return (
            <div className='makeMaps-options'>
                <label htmlFor='showLegend'>{strings.showLegend}
                    <input id='showLegend' type='checkbox' checked={legend.visible} onChange={(e) => {
                        legend.visible = (e.currentTarget as any).checked;
                    } } />
                </label>
                <br />
                {legend.visible ? <div>
                    <label>{strings.legendTitle}</label>
                    <input type='text' style={{ width: '100%' }} value={legend.title} onChange={(e) => {
                        this.props.state.legend.title = (e.target as any).value;
                    } } />
                    <br />
                    <label>{strings.legendMeta}</label>
                    <div style={{ background: 'white', border: '1px solid #cecece' }}>
                        <TextEditor
                            style={{ width: '100%', minHeight: '80px' }}
                            content={legend.meta}
                            onChange={(e) => {
                                legend.meta = e.target.value;
                            } }
                            />
                    </div>
                    <label htmlFor='showPercentages'>{strings.legendDistShow}
                        <input id='showPercentages' type='checkbox' checked={legend.showPercentages} onChange={(e) => {
                            this.props.state.legend.showPercentages = (e.currentTarget as any).checked;
                        } } />
                    </label>
                    <br />
                    <label htmlFor='showPercentages'>{strings.legendVarShow}
                        <input id='showPercentages' type='checkbox' checked={legend.showVariableNames} onChange={(e) => {
                            legend.showVariableNames = (e.currentTarget as any).checked;
                        } } />
                    </label>
                    <br />
                    <label htmlFor='makeHorizontal'>{strings.legendAlignHorizontal}
                        <input id='makeHorizontal' type='checkbox' checked={legend.horizontal} onChange={(e) => {
                            this.props.state.legend.horizontal = (e.currentTarget as any).checked;
                        } } />
                    </label>
                    <hr />
                    <label>{strings.legendPosition}</label>
                    <table style={{ cursor: 'pointer', border: '1px solid #999999', width: 50, height: 50, margin: '0 auto' }}>
                        <tbody>
                            <tr>
                                <td style={{
                                    border: '1px solid #999999', borderRadius: 5,
                                    background: legend.top && legend.left ? '#FFF' : ''
                                }}
                                    onClick={() => { legend.top = true; legend.left = true; legend.bottom = false; legend.right = false; } } />
                                <td style={{
                                    border: '1px solid #999999', borderRadius: 5,
                                    background: legend.top && legend.right ? '#FFF' : ''
                                }}
                                    onClick={() => { legend.top = true; legend.right = true; legend.bottom = false; legend.left = false; } } />
                            </tr>
                            <tr>
                                <td style={{
                                    border: '1px solid #999999', borderRadius: 5,
                                    background: legend.bottom && legend.left ? '#FFF' : ''
                                }}
                                    onClick={() => { legend.bottom = true; legend.left = true; legend.top = false; legend.right = false; } } />
                                <td style={{
                                    border: '1px solid #999999', borderRadius: 5,
                                    background: legend.bottom && legend.right ? '#FFF' : ''
                                }}
                                    onClick={() => { legend.bottom = true; legend.right = true; legend.top = false; legend.left = false; } } />
                            </tr>
                        </tbody>
                    </table>
                </div> : null}
            </div >);
    }
}
