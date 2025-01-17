import {
  Link,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import React, {useEffect, useState} from "react";
import { columns, users } from "./data";
import { RenderCell } from "./render-cell";

export const TableWrapper = () => {


  const [sInLoad, setSInLoad] = useState(true)

  const [sData, setSData] = useState()

  useEffect(() => {
    fetch(`${process.env.API_PATH}/api/v1/users/list`).then(res => res.json()).then((data) => {
      console.log(data)
      if (data.success) {
        setSInLoad(false)
        setSData(data.data)
      }

    })
  }, []);



  return(
      <>
        {!sInLoad ? <div className=" w-full flex flex-col gap-4">
          <Table aria-label="Example table with custom cells">
            <TableHeader columns={columns}>
              {(column) => (
                  <TableColumn
                      key={column.uid}
                      hideHeader={column.uid === "actions"}
                      align={column.uid === "actions" ? "center" : "start"}
                  >
                    {column.name}
                  </TableColumn>
              )}
            </TableHeader>
            <TableBody items={sData}>
              {(item) => (
                  <TableRow>
                    {(columnKey) => (
                        <TableCell>
                          {
                            // @ts-ignore
                            RenderCell({user: item, columnKey: columnKey})}
                        </TableCell>
                    )}
                  </TableRow>
              )}
            </TableBody>
          </Table>
        </div> : <>no</>}


      </>
  )


      ;
};
