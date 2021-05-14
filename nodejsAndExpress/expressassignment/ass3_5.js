    // Populate initial inventory
add=()=>{
inventory.add (new Item("Apples", 3));
inventory.add(new Item ("Oranges", 7));
inventory.add (new Item("Pomegranates", 55));
}

@Override 
public Item getItem(String itemName) { 
    for (Item item: inventory) { 
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