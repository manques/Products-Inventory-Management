import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Title from '../title/title';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import noImage from '../../assets/no-image.jpeg';

const useStyles = makeStyles(theme => ({
    container: {
        // ...theme.custom.page,
        // padding: '1rem'
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
    tableContainer: {

    },
    table: {

    },
    tableHead: {
        backgroundColor: theme.palette.primary.main
    },
    headCell: {
        color: 'white',
        fontWeight: '700'
    },
    tableBody: {

    },
    tableRow: {

    },
    TableCell: {

    },
    editCell: {

    },
    deleteCell: {

    },
    editIcon: {

    },
    deleteIcon: {
        
    },
    imageContainer: {
        width: '100%',
        height: '100px',
        alignItem: 'center'
    },
    image: {
        width: 'auto',
        maxWidth: '100%',
        height: '100%'
    }
}));

const CustomTable = props => {
    const classes = useStyles();
    const { 
        rows, 
        columns, 
        isEdit, 
        onEdit, 
        isDelete, 
        onDelete,
        order,
        orderBy,
        handleOrderBy, 
    } = props;


    const onRenderImage = (name, value) => {
        if(value) {
            return <img src={value} 
                          alt={name} 
                          className={classes.image} />
        } else {
            return <img src={noImage} 
                          alt={name} 
                          className={classes.image} />
        }
    }

    const onCell = (name, value) => {
       switch(name){
            case 'image':
               return <div className={classes.imageContainer}>
                   {onRenderImage(name, value)}
               </div>;

            default: 
            return value;
       }
    }

    const onSortHeadCell = (item) => {
        return (
            <TableCell key={item.id}
                        className={classes.headCell}
                        sortDirection={orderBy === item.title ? order : false}>
                <TableSortLabel active={orderBy === item.title}
                                direction={orderBy === item.title ? order : 'asc'}
                                onClick={() => handleOrderBy(item.title)}>
                    {item.title}
                    {
                        orderBy === item.title ? 
                        (
                            <span className={classes.visuallyHidden}>
                                {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                            </span>
                        ) 
                        : null
                    }
                </TableSortLabel>
            </TableCell>
        );
    }

    const onRenderTable = (list) => {
        return (
            <TableContainer className={classes.tableContainer}
                            component={Paper}>
                <Table className={classes.table}>
                    {/* head */}
                    <TableHead className={classes.tableHead}>
                        <TableRow>
                            {
                                columns.map(item => (
                                    <>
                                        {
                                            item.isSort ?
                                            onSortHeadCell(item):
                                            <TableCell key={item.id}
                                                       className={classes.headCell}>
                                                    {item.title}
                                            </TableCell>
                                        }
                                    </>
                                ))
                            }
                            {
                                isEdit &&
                                <TableCell key={'edit'}
                                            className={classes.headCell}>
                                        edit
                                </TableCell>
                            }
                            {
                                isDelete &&
                                <TableCell key={'delete'}
                                            className={classes.headCell}>
                                        delete
                                </TableCell>
                            }
                        </TableRow>
                    </TableHead>
                     {/* body */}
                     <TableBody>
                         {
                            rows.map(row => (
                                <TableRow key={row.id}>
                                    {
                                        columns.map(item => (
                                            <TableCell key={item.key}>
                                               {
                                                   onCell(item.title, row[item.title])
                                               }
                                            </TableCell>
                                        ))
                                    }
                                    {
                                        isEdit &&
                                        <TableCell key={'edit'}
                                                    className={classes.editCell}>
                                                <IconButton color="primary"
                                                            onClick={() => onEdit(row)}
                                                            className={classes.editIcon}>
                                                    <EditIcon />
                                                </IconButton>   
                                        </TableCell>
                                    }
                                    {
                                        isDelete &&
                                        <TableCell key={'delete'}
                                                    className={classes.editCell}>
                                                <IconButton color="secondary"
                                                            onClick={() => onDelete(row)}
                                                            className={classes.deleteIcon}>
                                                    <DeleteIcon />
                                                </IconButton>
                                        </TableCell>
                                    }
                                </TableRow>
                            ))
                         }
                     </TableBody>
                </Table>
            </TableContainer>
        );
    }
    return (
    <div className={classes.container}>
        {
            rows.length > 0 ? 
            onRenderTable(rows):
            <Title title="No Product Found!!" />
        }
    </div>);
}

export default CustomTable;