import './mylabel.css';

export interface MyLabelProps {
    /**
     * This is the message to show in the label
     */
    label: string;
    /**
     * This is the size of the label
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Make the text UpperCase
     */
    allCaps: boolean;
    /**
     * Change the color of the label 
     * */ 
    color: 'primary' | 'secondary' | 'tertiary';
    /**
     * Change the font color of the label
     */
    fontColor?: string;
}

export const MyLabel = ( { label = 'No Label', size = 'normal', allCaps = false, color = 'primary', fontColor }: MyLabelProps ) => {
  return (
    <span className={`label ${size} text-${color}`}  style={{ color: fontColor }}>
        {
            allCaps ? label.toUpperCase() : label
        }
    </span>
  )
}
