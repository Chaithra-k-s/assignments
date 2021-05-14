import { listenerCount } from "./views/schema";

/**
 *  Persistence operations for fruit web service.
 */
 const mongoose=require("mongoose");
 //const inventory=require("./schema");

 mongoose.connect("mongodb+srv://admin:123@mongodbpractise.bjozc.mongodb.net/inventory?retryWrites=true&w=majority",
()=>console.log("database connected!"));

 public interface IDatabase {

    /**
    * Get a single (@link Item) for the given item name.
    *
    * @param itemName the item name
    * @return the (@link Item), or null if there is no such item
    */
    public Item(itemName:String,value:Number);
    
    /** Get the current inventory (list of (@link Item)s.
     * @return the current inventory (list of {@link Item}s
    */
    public getInventory();
     }

     /**
 * Implementation of the (@link IDatabase) interface that stores
 * objects using in-memory data structures. It doesn't 
 * provide actual persistence, but is useful as a proof 
 * of concept.
*/
public class FakeDatabase implements IDatabase { 
     private inventory;

public FakeDatabase () {
        this.inventory =new IDatabase.Item(itemName,value){

    // Populate initial inventory

        this.inventory.add (this.Item("Apples", 3));
        inventory.add(Item ("Oranges", 7));
        inventory.push(Item("Pomegranates", 55));
        }
        
        @Override 
        public Item(itemName:String) { 
            for (let item in inventory) { 
                if (item.getName ().equals (itemName)) {
                     // return a copy 
                     return new Item(item.getName(), item.getQuantity());
                }
            }
        // no such item
        return null;
        }
        
        @Override 
        public List<Item> getInventory(){
        // return a copy 
        return new ArrayList<Item> (inventory);
        }